import {Banner, Button} from "@vkontakte/vkui";

export const WelcomeBanner1 = () => {
    return <Banner
        header={'Что это?'}
        text={'Это экономическая игра, где вашей целью является наращивание капитала и соперничество с другими игроками'}
    />
}

export const WelcomeBanner2 = () => {
    return <Banner
        header={'Как играть?'}
        text={'Создайте компанию. Выберите производимую продукцию. Наладьте поставки и производство. Оплачивайте труд рабочих и инвестируйте прибыль в производство. Четких инструкций нет, но в ваших интересах развивать компанию.'}
    />
}

export const WelcomeBanner3 = () => {
    return <Banner
        header={'Что теперь?'}
        text={'Сейчас вы можете сразу создать компанию - кнопка снизу, или осмотреться, просто закрыв эту панель. Компанию можно будет создать позже.'}
    />
}

export const WelcomeBanner4 = () => {
    return <Banner
        header={'У меня еще остались вопросы'}
        actions={<Button stretched mode={'secondary'} size={'l'}>Помощь</Button>}
        text={'Можете задать вопрос в ЛС официального сообщества'}
    />
}