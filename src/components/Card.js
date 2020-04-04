import React, { Component } from "react";
import { Image, Table } from "react-bootstrap";
import "./Card.css";
// import Loader from "./Loader";

export default class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {

            username: props.username,
            name: "",
            avatar_url: "",
            company: "",
            location: "",
            public_repos: "0",
            followers: "0",
            gists: "0",
            error: null,
            // isLoading: true

        }
    }

    componentDidMount() {
        console.log("SSS");


        const url = "https://api.github.com/users/" + this.state.username;
        fetch(url).then(result => {
            if (result.ok) {
                return result.json();

            }
            else {
                throw new Error("USER NoT FOUND");
            }
        }).then(data => {
            this.setState({
                name: data.name,
                avatar_url: data.avatar_url,
                company: data.company,
                location: data.location,
                public_repos: data.public_repos,
                gists: data.public_gists,
                followers: data.followers,
                // isLoading: false

            })
        }).catch(error => {
            this.setState({ error }, () =>
                console.log("callb", error)
            );

        })

    }



    render() {
        // const { err, isLoading } = this.state;
        // if (err) {
        //     return (

        //         <p style={{
        //             fontSize: "7hv"

        //             ,
        //             fontWeight: 250,
        //             margin: "20vh auto",
        //             color: "red",

        //         }}

        //         >
        //             {err.message}
        //         </p>
        //     )

        // }
            return (
                <div classname="card-container">
                    <div className="card-header">
                        <Image
                            src="https://picsum.photos/200/300/?random"
                            className="img-header"
                        />
                    </div>
                    <Image src={this.state.avatar_url} className="img-custom" circle />
                    <div className="card-body">
                        <h3>{this.state.name}</h3>
                        <h4>
                            <a href={"https://github.com/" + this.state.username}>
                                @{this.state.username}
                            </a>
                        </h4>
                        <p>{this.state.company}</p>
                        <p>{this.state.location}</p>

                        <Table>
                            <thead>
                                <tr>
                                    <th>REPOS</th>
                                    <th>GISTS</th>
                                    <th>FOLLOWERS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.public_repos}</td>
                                    <td>{this.state.gists}</td>
                                    <td>{this.state.followers}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            );
    }
}