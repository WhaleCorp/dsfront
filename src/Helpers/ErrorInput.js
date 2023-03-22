export default function ErrorInput({isCorrect}) {
    return (
        <div>
            {isCorrect === false ?
                <span className="font-[Poppins] flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    Login is alredy taken!
                </span>
                : <span></span>}
        </div>
    )
}