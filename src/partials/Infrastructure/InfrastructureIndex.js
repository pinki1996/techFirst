import Dying from "./Dying";
import Fulfilment from "./Fulfilment";
import Handloom from "./Handloom";
import Header from "./Header";
import Manufacturing from "./Manufacturing";
import Packing from "./Packing";
import Production from "./Production";
import Rugs from "./Rugs";

function InfrastructureIndex()
{
    return(
        <>
        <Header/>
        <Manufacturing/>
        <Production/>
        <Handloom/>
        <Rugs/>
        <Dying/>
        <Fulfilment/>
        <Packing/>
        </>
    )
}
export default InfrastructureIndex;