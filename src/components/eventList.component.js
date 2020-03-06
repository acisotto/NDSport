import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Event = props => (

    <div class="col-md-6 col-sm-12">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{props.event.name}</h5>
                <span>{props.event.dateToHappen}</span>
                <p class="card-text">{props.event.location}
                </p>

            </div>
            <div class="card-footer">
                <Link class='btn btn-primary' to={"/update/" + props.event._id}>editar</Link> <a href='#' class='btn btn-danger' onClick={() => { props.deleteEvent(props.event._id) }}>deletar</a>
            </div>
        </div>
    </div>


    // <tr>
    //     <td>{props.event.name}</td>
    //     <td>{props.event.location}</td>
    //     <td>{props.event.datetohappen}</td>
    //     <td>
    //         <Link to={"/update/" + props.event._id}>editar</Link> | <a href='#' onClick={() => { props.deleteEvent(props.event._id) }}>deletar</a>
    //     </td>
    // </tr>
)



export default class EventList extends Component {
    constructor(props) {
        super(props);

        this.deleteEvent = this.deleteEvent.bind(this);

        this.state = { events: [] };
    }

    deleteEvent(id) {
        axios.delete('http://localhost:5000/events/' + id)
            .then(res => console.log(res.data));


        this.setState({
            events: this.state.events.filter(element => element._id !== id)
        })
    }


    componentDidMount() {
        axios.get('http://localhost:5000/events/')
            .then(response => {
                this.setState({ events: response.data });
            })
            .catch(err => { console.log(err) });
    }


    evList() {
        return this.state.events.map(curEvent => {
            console.log(curEvent);
            return <Event event={curEvent} deleteEvent={this.deleteEvent} key={curEvent._id} />
        })

    }


    render() {
        return (

            <div class='container'>
                <div class='row' >
                    <div class='col-md-6'>
                        <a class='btn btn-primary' href='/add'>Inserir Evento</a>
                    </div>
                </div>
                <div class="row">
                    {/* <h3>Eventos cadastrados</h3>
                <thead className="thead-light">
                    <tr>
                        <th>Nome</th>
                        <th>Local</th>
                        <th>Data</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody> */}
                    {this.evList()}
                    {/* </tbody>
                <tfoot>
                    

                </tfoot> */}


                </div>

            </div>
        )
    }
}