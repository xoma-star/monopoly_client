import {
    ModalPage,
    ModalRoot,
} from "@vkontakte/vkui";
import {VKUIModals} from "../../Redux/Reducers/vkui";
import {useActions} from "../../Hooks/useActions";
import {CompanyManageFinancialModal} from "./CompanyManage/Financial";
import {FinancialModalCardAdd} from "./CompanyManage/FinancialAddCard";
import {CompanyManageWorkersModal} from "./CompanyManage/WorkersManage";
import {CompanyManageWarehousesModal} from "./CompanyManage/Warehouses";
import {CompanyManageProductionModal} from "./CompanyManage/Production";

interface props{
    activeModal: string | null
}

export const RootModal = ({activeModal}: props) => {
    const {VKUIModalSet} = useActions()
    return <ModalRoot onClose={() => VKUIModalSet(null)} activeModal={activeModal}>
        <ModalPage id={VKUIModals.COMPANY_MANAGE_FINANCIAL} children={<CompanyManageFinancialModal/>}/>
        <FinancialModalCardAdd id={VKUIModals.COMPANY_MANAGE_FINANCIAL_ADD_CARD} withdraw={false}/>
        <FinancialModalCardAdd id={VKUIModals.COMPANY_MANAGE_FINANCIAL_WITHDRAW_CARD} withdraw={true}/>
        <ModalPage id={VKUIModals.COMPANY_MANAGE_WORKERS} children={<CompanyManageWorkersModal/>}/>
        <ModalPage id={VKUIModals.COMPANY_MANAGE_WAREHOUSES} children={<CompanyManageWarehousesModal/>}/>
        <ModalPage id={VKUIModals.COMPANY_MANAGE_PRODUCTION} children={<CompanyManageProductionModal/>}/>
    </ModalRoot>
}