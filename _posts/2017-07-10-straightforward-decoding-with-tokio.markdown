---
layout: post
title:  "Straightforward Decoding with Tokio"
categories: ['rust', 'tokio']
---

With rust's recent [tokio-io](https://tokio.rs/blog/tokio-0-1/) update, I realized there wasn't much explanation on how to use the `bytes` crate primitives during decoding, so here's a rundown.

## Setup

For Demo purposes you can use the online [rust-playground](https://play.rust-lang.org/?version=stable&mode=debug).

## BytesMut

While in the [tokio.rs](https::/tokio.rs) features an example of a line reader, it doesn't very much help on how to use BytesMut in real world scenarios such as when decoding integers of different sizes.


{% highlight rust %}
extern crate tokio_io;
extern crate bytes;

use std::io;
use bytes::{Buf, BytesMut, IntoBuf};
use tokio_io::codec::Decoder;

const MAGIC: &'static [u8] = b"START";

struct Header {
    length: u8
}

/// This is our sample struct
struct DemoCodec;

impl Decoder for DemoCodec {
    type Item = Vec<u8>;
    type Error = io::Error;
    fn decode(&mut self, src: &mut BytesMut) -> Result<Option<Self::Item>, Self::Error> {
        
        // Let's make a temporary src
        let mut temp_src = src.clone();
        
        // Check for Magic and Header Length in one go
        if temp_src.len() < MAGIC.len() + 1 {
            return Ok(None);
        }
        
        // Let's check the id is correct, if not return an error
        let mut buf = temp_src.split_to(MAGIC.len()).into_buf();
        if MAGIC != buf.collect::<Vec<u8>>().as_slice() {
            return Err(io::Error::new(io::ErrorKind::InvalidData, "Invalid Message Id"));
        }
        
        // Get the length
        let mut buf = temp_src.split_to(1).into_buf();
        let msg_length = buf.get_u8();
        // If the length is zero, we are done
        if msg_length == 0 {
            // Advance actual src
            *src = temp_src;
            return Ok(None);
        }
        
        // Now let's check if we have enough
        if temp_src.len() < msg_length as usize {
            return Ok(None);
        }
        
        // If we do, let's grab all the data, up to msg_length
        let mut buf = temp_src.split_to(msg_length as usize).into_buf();
        // Let's create our vec
        let mut dst = Vec::with_capacity(msg_length as usize);
        for _ in 0..msg_length {
            let num = buf.get_u8();
            dst.push(num);
        }
        
        // We are done! Let's advance actual source
        *src = temp_src;
        // Return Result
        Ok(Some(dst))
    }
}

fn main() {
    let data = "START41234";
    let mut buf = BytesMut::from(data);
    
    let mut my_codec = DemoCodec;
    let decoded = my_codec.decode(&mut buf).expect("Valid Message");
    
    assert_eq!(Some(vec![1,2,3,4]), decoded);
}

{% endhighlight %}


