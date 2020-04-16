import factory from "../ethereum/factory";
import Proposition from "../ethereum/build/Proposition"
import React, {Component} from 'react';
import Layout from "../components/Layout";
import {Button, Card} from "semantic-ui-react";
import web3 from "../ethereum/web3";

class BetIndex extends Component {

    static async getInitialProps() {
        const propositionAddress = await factory.methods.getDeployedPropositions().call();
        const items = propositionAddress.map(async address => {
            // get the instance of deployed contract
            const instance = new web3.eth.Contract(JSON.parse(Proposition.interface), address);

            const title = await instance.methods.pTitle().call();
            const description = await instance.methods.pDescription().call();

            return {title: title, description: description, address: address}
        });

        // value passed to this.props
        return {propositionAddress, items}
    }

    renderPropositions() {
        const items = this.props.items.map(item => {
            console.log(item);
            return {
                header: item.title,
                description: item.description,
                meta: item.address
            }
        });

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
                <div>
                    <h3>Open Propositions</h3>
                    {this.renderPropositions()}
                    <Button
                        content={'New'}
                        icon={'add circle'}
                        labelPosition={'right'}
                        primary
                    />
                </div>
            </Layout>
        );
    }
}

export default BetIndex