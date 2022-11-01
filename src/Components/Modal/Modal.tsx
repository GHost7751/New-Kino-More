import React, { FC } from 'react';
import { Button,Card } from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import APIPlotFull from '../../Types/Movie/Movie';




interface ModalProps{
    onHide : () => any,
    show : boolean,
    data : APIPlotFull,
}

const MoreInfo:FC<ModalProps> = (props) => {
    const {Title,
        Year,
        Released,
        Runtime,
        Genre,
        Director,
        Actors,
        Plot,
        Country,
        Poster,
        imdbID,
        Writer} = props.data

    return (
        
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        More Info about {Title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Card style={{ width: '100%', height: '50%' }} key={imdbID}>
                    {Poster === 'N/A' ? (
                        <img
                            src={`https://via.placeholder.com/300x400?text=${Title}`}
                        />
                    ) : (
                        <Card.Img variant="top" src={Poster} />
                    )}
                    <Card.Body>
                        <Card.Title>{Title}</Card.Title>
                        <Card.Text>
                            <strong>Country</strong> : {Country}
                            <br />
                            <strong>Years</strong> : {Year}
                            <br />
                            <strong>Released</strong> : {Released}
                            <br />
                            <strong>Runtime</strong> : {Runtime}
                            <br />
                            <strong>Genre</strong> : {Genre}
                            <br />
                            <strong>Director</strong> : {Director}
                            <br />
                           <strong>Actors</strong> : {Actors}
                            <br />
                            <strong>Writer</strong> : {Writer}
                            <br />
                            <strong>Plot</strong> : {Plot}
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
    );
};

export default MoreInfo;