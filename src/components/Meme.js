import React from "react";

function Meme() {
    return (
        <div>
            <main>
                <form>
                    <input type="text" placeholder="Top Text" />
                    <input type="text" placeholder="Bottom Text" />
                    <button className="meme-button">Get The Images</button>
                </form>
            </main>
        </div>
    )
}
export default Meme