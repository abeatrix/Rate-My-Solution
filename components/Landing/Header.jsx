export default function Header() {

    return (
        <div className="mt-5 p-5 flex flex-col justify-center w-full h-full">

            <img src="/code.png" className="opacity-60 repeat-x" />

            <div className="p-5 flex flex-col justify-center w-full h-1/2 absolute">
                <p className="text-center text-white leading-6 z-40 text-6xl p-3">Share Your Solutions</p>
                <p className="text-center text-white leading-6 z-40 text-6xl p-3">Rate by Your Peers</p>
                <div className="text-center z-10 p-3">
                    <button className="bg-white font-bold rounded-full py-3 px-6 z-40"><p className="text-primary text-5xl">SHARE</p></button>
                </div>
            </div>

        </div>
    )
}
