import {Button, CardGrid, ContentCard, Group, Header} from "@vkontakte/vkui";

interface props {
    count: number,
    style?: object,
    showNext?: boolean
}

export const NewsBlock = ({count, style, showNext = false}: props) => {
    return <Group style={style} mode={'plain'} header={<Header mode={'secondary'}>новости</Header>}>
        <CardGrid size={'l'}>
            <ContentCard
                src={'https://cdnn21.img.ria.ru/images/07e6/02/0a/1772163359_0:0:2817:2048_1440x900_80_0_1_659bc6d502f0a4a20513212fe84934fc.jpg.webp?source-sid=reuters_photo'}
                // subtitle={'официально'}
                header={'Правительство Великобритании повышает налоги'}
                text={'все компании, имеющие штаб-квартиру в городах Великобритании, теперь платят 30% налога на прибыль'}
                maxHeight={150}
            />
        </CardGrid>
        {showNext && <Button size={'l'} stretched mode={'tertiary'}>Показать еще</Button>}
    </Group>
}