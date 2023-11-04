function printHello() {
    console.log("Hello!");
}

export default function Button() {
    return(
        <div>
            <button onClick={printHello}>Click me!</button>
            <p onMouseOver={printHello}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iste eos aut excepturi eveniet est necessitatibus, saepe odio nobis exercitationem amet numquam ducimus ipsum laborum placeat repudiandae nihil dolorem possimus?</p>
        </div>
    )
}