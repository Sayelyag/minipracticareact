import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class DoctoresEspecialidad extends Component {
    cajaEspecialidad = React.createRef();

    urlDoctores = Global.urlApiDoctores;

    buscarDoctores = (event) => {

        event.preventDefault();

        let especialidad = this.cajaEspecialidad.current.value;
        let request = "Doctores/DoctoresEspecialidad/";
        console.log (this.urlDoctores + request + this.state.especialidades)
        axios.get(this.urlDoctores + request + this.state.especialidades).then((response) => {
            console.log("Leyendo doctores");
            this.setState({
                doctores: response.data
            });
        });
    }

    state = {

        doctores: [],

        // Array con los oficios que aparecerán en el desplegable.
        especialidades: [
            "Urología",
            "Psiquiatría",
            "Cardiología",
            "Pediatría",
            "Neurología",
            "Ginecología",
            "Prueba",
            "pruebav2",
            "pruebav3",
        ]
    }

    render() {
        return (
            <div>

                <h1 style={{ color: "lightcoral" }}>
                    Doctores por Especialidad
                </h1>

                <form>

                    <label>Seleccione Especialidad: </label>

                    <select ref={this.cajaEspecialidad}>

                        {this.state.especialidades.map((especialidad, index) => {
                            return (

                                <option key={index} value={especialidad}>
                                    {especialidad}
                                </option>
                            )
                        })}

                    </select>

                    <button
                        type="button"
                        style={{
                            backgroundColor: "white",
                            borderRadius: "8px",
                            padding: "5px"
                        }}
                        onClick={this.buscarDoctores}
                    >
                        Buscar doctores
                    </button>

                </form>

                <br />

                <table style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
                }}>

                    <thead>
                        <tr>

                            <th style={{ color: "grey" }}>Apellido</th>

                            <th style={{ color: "grey" }}>Especiaalidad</th>

                        
                            <th style={{ color: "grey" }}>Salario</th>

                            <th style={{ color: "grey" }}>ID Hospital</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.doctores.map((doc, index) => {
                            return (
                                <tr key={index}>
                                    <td style={{ color: "lightpink" }}>
                                        {doc.apellido}
                                    </td>
                                    <td style={{ color: "lightpink" }}>
                                        {doc.especialidad}
                                    </td>
                                    <td style={{ color: "lightpink" }}>
                                        {doc.salario}
                                    </td>
                                    <td style={{ color: "lightpink" }}>
                                        {doc.idHospital}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
