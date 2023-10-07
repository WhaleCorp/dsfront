import { useStores } from "../../../../Store/MainStore"
import CommonTemplate from "./CommonTemplate"
import ImgTemplate from "./ImgTemplate"
export default function Templates(){    
    const {TemplateStore} = useStores()
    function sendInfo(e){
        e.preventDefault()
        var seen = []
        let t = document.getElementById("template").innerHTML
        t.replace("\"","\'")
        fetch("https://localhost:7296/Monitor/PostDataToDSPage", {
            method: "POST",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxIiwibmJmIjoxNjk2NDYxNzk3LCJleHAiOjE2OTY0NjUzOTcsImlhdCI6MTY5NjQ2MTc5NywiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzI5NiIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTI5NiJ9.y5G_DPLLetmcrvr8CpbOKEoEfCCmQh28zMvPJcJ1_f0",
            headers:{
                'Content-Type': 'text/json',
                'Accept': 'application/json, text/plain',
            },
            body: JSON.stringify(t),
        }).then(result => console.log(result.json()))
    }

    function getCircularReplacer() {
        const ancestors = [];
        return function (key, value) {
          if (typeof value !== "object" || value === null) {
            return value;
          }
          // `this` is the object that value is contained in,
          // i.e., its direct parent.
          while (ancestors.length > 0 && ancestors.at(-1) !== this) {
            ancestors.pop();
          }
          if (ancestors.includes(value)) {
            return "[Circular]";
          }
          ancestors.push(value);
          return value;
        };
      }

    return(
        <div>
            {/* <ImgTemplate/> */}
            <CommonTemplate/>
            <button className="border-2 rounded-lg border-black w-[20%] mt-5" onClick={sendInfo}>Send</button>
        </div>
    )
}