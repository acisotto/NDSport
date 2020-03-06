import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditEvent extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            name: "",
            location: "",
            dateToHappen: new Date()
        }
    }

    componentDidMount() {
        console.log("ID CAIXA EDIT");
        console.log(this.props.match.params.id);
        axios.get('http://localhost:5000/events/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    location: response.data.location,
                    dateToHappen: new Date(response.data.dateToHappen)
                })

                console.log(response.data);
            })
            .catch(err => { console.log(err) });
    }


    onChangeName(e) {
        this.setState({ name: e.target.value });
    }

    onChangeLocation(e) {
        this.setState({ location: e.target.value });
    }

    onChangeDate(e) {
        this.setState({ date: e });
    }

    onSubmit(e) {
        e.preventDefault();
        const event = {
            name: this.state.name,
            location: this.state.location,
            dateToHappen: this.state.dateToHappen
        }

        console.log(event);

        axios.patch('http://localhost:5000/events/update/' + this.props.match.params.id, event)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        window.location = '/';
    }



    render() {
        return (
            <div>
                <h3>Editar evento</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group input-group mb-3">
                        {/* <label>Name: </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        /> */}
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">Nome: </span>
                        </div>

                        <input type="text" class="form-control" placeholder="" required onChange={this.onChangeName} aria-label="" aria-describedby="basic-addon2" value={this.state.name} />


                    </div>
                    <div className="form-group input-group">
                        {/* <label>Location: </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.location}
                            onChange={this.onChangeLocation}
                        /> */}
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">Local: </span>
                        </div>

                        <input type="text" class="form-control" placeholder="" required onChange={this.onChangeLocation} aria-label="" aria-describedby="basic-addon2" value={this.state.location} />

                    </div>
                    <div className="form-group input-group">
                    <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">Data: </span>
                        </div>
                        <DatePicker className='form-control' aria-describedby="basic-addon2" 
                            required
                            selected={this.state.dateToHappen}
                            onChange={this.onChangeDate}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Editar Evento" className="btn btn-primary" />
                        <a class='btn btn-secondary' href='/'>Voltar</a>
                    </div>
                </form>
            </div>

        )
    }
}