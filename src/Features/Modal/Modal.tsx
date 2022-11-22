import React, {  useEffect } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getShow, loadFetchMovieFull } from './modal-slice';



const MoreInfo = ():JSX.Element => {
  const dispatch = useAppDispatch()
  const plotFull = useAppSelector(state => state.modal.full)
  const show = useAppSelector(state => state.modal.show)
  const ids = useAppSelector(state => state.modal.ids)

  const onHide = () => {
    dispatch(getShow(ids))
  }

  useEffect(() => {
    if(show)
    {
        dispatch(loadFetchMovieFull(ids))
    }
  },
  [show, dispatch, ids])
  
    return (
        <> 
              <Modal
                    show = {show}
                    onHide = {() => dispatch(getShow(ids))}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            More Info about {plotFull.Title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Card  key={plotFull.imdbID}>
                        {plotFull.Poster === 'N/A' ? (
                            <img
                                src={`https://via.placeholder.com/300x400?text=${plotFull.Title}`}
                            />
                        ) : (
                            <Card.Img variant="top" src={plotFull.Poster} />
                        )}
                        <Card.Body>
                            <Card.Title>{plotFull.Title}</Card.Title>
                            <Card.Text>
                                <strong>Country</strong> : {plotFull.Country}
                                <br />
                                <strong>Years</strong> : {plotFull.Year}
                                <br />
                                <strong>Released</strong> : {plotFull.Released}
                                <br />
                                <strong>Runtime</strong> : {plotFull.Runtime}
                                <br />
                                <strong>Genre</strong> : {plotFull.Genre}
                                <br />
                                <strong>Director</strong> : {plotFull.Director}
                                <br />
                               <strong>Actors</strong> : {plotFull.Actors}
                                <br />
                                <strong>Writer</strong> : {plotFull.Writer}
                                <br />
                                <strong>Plot</strong> : {plotFull.Plot}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => onHide()}>Close</Button>
                    </Modal.Footer>
                </Modal>
        </>
    );
};

export default MoreInfo;


