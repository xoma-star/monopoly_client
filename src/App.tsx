import React from 'react';
import {useTypedSelector} from "./Hooks/useTypedSelector";
import {
    AdaptivityProvider,
    AppRoot,
    ConfigProvider,
    Panel,
    Platform,
    Root,
    ScreenSpinner,
    SplitLayout,
    useAppearance,
    View
} from "@vkontakte/vkui";
import WelcomePanel from "./Components/Panels/Welcome";
import {VKUI_PANELS} from "./Constants/VKUI";
import {useFirebase} from "./Hooks/useFirebase";
import {CompanyCreatePanel} from "./Components/Panels/CompanyCreate";
import {CompanyOverviewPanel} from "./Components/Panels/CompanyOverview";
import {MainPanel} from "./Components/Panels/Main";
import {CompaniesPanel} from "./Components/Panels/Companies";
import {CompanyManagePanel} from "./Components/Panels/CompanyManage";
import {getLast} from "./Functions/getLast";
import {RootModal} from "./Components/Modals";
import {useVKBridge} from "./Hooks/useVKBridge";

const App = () => {
    useVKBridge()
    useFirebase()
    const VKUI = useTypedSelector(s => s.vkui)
    const user = useTypedSelector(s => s.user)
    const screenSpinnerCondition = !user.docId
    const appearance = useAppearance()

    return <ConfigProvider appearance={appearance} platform={Platform.IOS}>
        <AdaptivityProvider>
            <AppRoot>
                <SplitLayout modal={<RootModal activeModal={getLast(VKUI.modal)}/>} popout={screenSpinnerCondition && <ScreenSpinner/>}>
                    <Root activeView={getLast(VKUI.history).view}>
                        <View id={'main'} activePanel={getLast(VKUI.history).panel}>
                            <Panel id={VKUI_PANELS.WELCOME} children={<WelcomePanel/>}/>
                            <Panel id={VKUI_PANELS.COMPANY_CREATE} children={<CompanyCreatePanel/>}/>
                            <Panel id={VKUI_PANELS.COMPANY_OVERVIEW} children={<CompanyOverviewPanel/>}/>
                            <Panel id={VKUI_PANELS.MAIN} children={<MainPanel/>}/>
                            <Panel id={VKUI_PANELS.COMPANIES} children={<CompaniesPanel/>}/>
                            <Panel id={VKUI_PANELS.COMPANY_MANAGE} children={<CompanyManagePanel/>}/>
                        </View>
                    </Root>
                </SplitLayout>
            </AppRoot>
        </AdaptivityProvider>
    </ConfigProvider>
        ;
}

export default App;
