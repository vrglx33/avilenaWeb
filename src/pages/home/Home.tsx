import React, {useState, useEffect} from 'react';
import {RouteComponentProps} from '@reach/router';
import BackgroundSlider from 'react-background-slider';
import CardOutlined from "../../components/card/Card";
import {fullSize, Mission, positions, Valores, Vision} from "./Home.constants";

const Home = (props: RouteComponentProps) => {
    const [cardConfig, setCardConfig] = useState(Mission);
    const [cardTimeout, setCardTimeout] = useState(null);

    useEffect(() => {
        setCardConfig(Mission);
    }, []);

    useEffect(() => {
        if (cardTimeout) {
            // @ts-ignore
            clearTimeout(cardTimeout);
        }
        setCardTimeout(
            // @ts-ignore
            setTimeout(() => {
                switch (cardConfig.title) {
                    case Vision.title:
                        setCardConfig(Mission);
                        break;
                    case Mission.title:
                        setCardConfig(Valores);
                        break;
                    case Valores.title:
                        setCardConfig(Vision);
                        break;
                    default:
                        setCardConfig(Mission);
                        break;
                }
            }, 12000)
        );
    }, [cardConfig]);
    return (
        <div style={fullSize}>
            { /*
             //@ts-ignore */}
            <div style={positions[cardConfig.position]}>
                <CardOutlined title={cardConfig.title} texts={cardConfig.texts}/>
            </div>
            <BackgroundSlider
                images={['food_manufacturing.jpg', 'production_plant.jpg', 'TalentoHumano.jpg']}
                duration={10} transition={2}/>
        </div>
    );
};

export default Home;
