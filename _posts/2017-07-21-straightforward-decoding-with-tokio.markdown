---
layout: post
title:  "Straightforward Decoding with Tokio"
categories: ['rust', 'tokio']
---

Working with rust's recent [tokio-io] update, I realized there wasn't much explanation on how to use the `bytes` crate primitives correctly during decoding.


{% highlight rust %}
extern crate tokio_io;
extern crate bytes;

use std::io;
use bytes::{Buf, BytesMut};
use tokio_io::codec::Decoder;

/// This is our sample struct
struct FooCodec;

impl Decoder for FooCodec {
    type Item = String;
    type Error = io::Error;
    fn decode(&mut self, src: &mut BytesMut) -> Result<Option<Self::Item>, Self::Error> {
        
    }
}


{% endhighlight %}
