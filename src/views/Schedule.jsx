import React from 'react'
import mobiscroll from "@mobiscroll/react"
import "@mobiscroll/react/dist/css/mobiscroll.min.css"

class Schedule extends React.Component {
    
    constructor(props) {
        super(props);
        // console.log("dasdasdasdas")
        this.state = {
            myEvents: []
        };
        
            mobiscroll.util.getJson('https://trial.mobiscroll.com/events/', (events) => {
                events = [
                    {start: "2019-08-15T07:00:00.000Z", end: "2019-08-15T08:00:00.000Z", text: "Feirão Auto Show no Anhembi - Espaço - Alameda Terracota, 545 - Cerâmica, São Caetano do Sul - SP, 09521-080", color: "#f67944"},
                    {start: "2019-08-15T09:00:00.000Z", end: "2019-08-15T15:15:00.000Z", text: "Veículos antigo raros - Parque Anhembi, Av. Olavo Fontoura, 1209 - Santana, São Paulo - SP, 02012-020", color: "#6e7f29"},
                    {start: "2019-08-16T07:45:00.000Z", end: "2019-08-16T13:00:00.000Z", text: "Encontro de carros antigos - Parque Anhembi, Av. Olavo Fontoura, 1209 - Santana, São Paulo - SP, 02012-020", color: "#de3d83"},
                    {start: "2019-08-16T13:00:00.000Z", end: "2019-08-16T19:00:00.000Z", text: "3º Encontro de Carros & Motos de Vargem Grande Paulista - Rodovia Raposo Tavares, 404-824 - Chácara do Planalto, Vargem Grande Paulista - SP, 06730-000", color: "#de3d83"},
                    {d: "8/17", text: "Dia dos Carros Europeus - Parque Anhembi, Av. Olavo Fontoura, 1209 - Santana, São Paulo - SP, 02012-020", color: "#635045"}
                ]
            this.setState({ myEvents: events})
        }, 'jsonp');
    }

    render() {

        return (

            <mobiscroll.Eventcalendar
                lang="pt-BR"
                theme="ios"
                display="inline"
                data={this.state.myEvents}
                view={{
                    calendar: { type: 'week' },
                    eventList: { type: 'day' }
                }}
            />
        );
    }    
}

export default Schedule
