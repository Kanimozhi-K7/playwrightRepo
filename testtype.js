let testtype="Manualtesting"
switch(testtype){
    case "smoke":
        console.log("dev team")
        break;
        case "sanity":
            console.log("Delivery Team")
            break;
            case "Regression":
                console.log("QA Team")
                break;
                default :
                console.log("Invalid testtype")
                break;
}