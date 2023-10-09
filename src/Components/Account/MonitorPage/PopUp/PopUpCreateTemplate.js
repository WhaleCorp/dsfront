import TemplateButton from "./PopUpModules/TemplateButton"

export default function PopUpCreateTemplate({ isOpen, setIsOpen, setRedactState }) {
    function close(e) {
        e.preventDefault()
        setIsOpen(false)
    }

    return (
        <div className="flex self-center w-full">
            {
                isOpen ? <div className="flex gap-2 p-4 w-full justify-around ">
                    <TemplateButton text={"Create fully new template how you want."} buttonText={"Create"} state={1}/>
                    <TemplateButton text={"Change ready-for-use template how you like."} buttonText={"Change"} state={2}/>
                    <TemplateButton text={"Use one of the build-in templates."} buttonText={"Use"} state={3}/>
                    <button className="absolute right-5 text-2xl" onClick={close}>X</button>
                </div> : null
            }
        </div>

    )
}