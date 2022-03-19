import { useState } from "react";
import styles from "./Work.module.css"

function KittyImg({ width, height, info }) {
    let src = `http://placekitten.com/${width}/${height}`;
    let [show, toggleShow] = useState(false);

    function onMouseOver(event) {
        toggleShow(true)
    }
    function onMouseLeave(event) {
        toggleShow(false)
    }
    return <div
        // onMouseOver={onMouseOver}
        // onMouseLeave={onMouseLeave}
        className={styles.Item}>
        <img src={src} alt="Kitty"/>
        {/* <h4 style={{ marginLeft: "2em", position: "absolute", bottom: "1em"}}>{info ?? "Kitty"  }</h4> */}
    </div>
}

const randomKitties = [[250, 300], [270, 300], [340, 300], [400, 300], [300, 300], [200, 300]].map(([w, h]) => <KittyImg width={w} height={h} />)

const WORK_EXPERIENCE = [
    { title: "Independent Creative", company: "Design" },
    { title: "Senior Art Director", company: "Apple" },
    { title: "Design Director", company: "Apple" },
    { title: "Sr. Designer", company: "Ro&Co" },
]

const SOCIAL = [
    { title: "Instagram", link: "#" },
    { title: "Github", link: "#" },
    { title: "Facebook", link: "#" }
]

export default function Work() {
    return <div>
        <div className={styles.Grid}>
            {randomKitties}
        </div>
        <section style={{ margin: "0 10%", padding: "7em 0" }}>
            <p style={{ maxWidth: "25em", fontSize: "1.4em" }}>
                My name is Jacob Payne, Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Ab fuga dignissimos natus eveniet, pariatur nam unde tempore nulla odio. Quis
                exercitationem aspernatur, perferendis provident ipsam
                necessitatibus excepturi animi dolores vitae!
            </p>
            <p style={{ marginTop: "5em", maxWidth: "25em", fontSize: "1.4em" }}>
                My name is Jacob Payne, Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Ab fuga dignissimos natus eveniet, pariatur nam unde tempore nulla odio. Quis
                exercitationem aspernatur, perferendis provident ipsam
                necessitatibus excepturi animi dolores vitae!
            </p>
            <p style={{ marginTop: "10em", marginBottom: "6em", maxWidth: "25em", height: "40%", fontSize: "1.4em" }}>
                For inquiries, collaborations and questions please e-mail <a href="mailto:info@latrasis.com">info@latrasis.com</a>
            </p>
        </section>

        <footer style={{ margin: "0 10%", padding: "0em 0 2em", display: "flex", flexDirection: "row" }}>
            <ul style={{ listStyle: "none", fontSize: "0.8em", padding: "0", marginRight: "2em" }}>
                <h4>Work Experience</h4>
                {WORK_EXPERIENCE.map(job => {
                    return <li style={{ marginTop: "1em" }}>{job.title}<br />{job.company}</li>
                })}
            </ul>
            <ul style={{ listStyle: "none", fontSize: "0.8em", padding: "0" }}>
                <h4>Social</h4>
                {SOCIAL.map(social => {
                    return <li style={{ marginTop: "1em" }}><a href={social.link}>{social.title}</a></li>
                })}
            </ul>
        </footer>
    </div>
}