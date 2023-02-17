import PropTypes from 'prop-types';
import Modal from "./Modal"
import { useModal } from "./useModal";
import DetPokemon from "../components/DetPokemon";

const Modals = ({ detail }) => {
    const [isOpenDetalle, openDetalle, closeDetalle] = useModal(false)


    return (
        <div className="justify-content-center" >
            <button className="btn btn-success text-white fw-bold" onClick={openDetalle}>Ver_Detalle</button>
            <Modal isOpen={isOpenDetalle} closeModal={closeDetalle}>
                <DetPokemon detalle={detail} />
            </Modal>
        </div>
    );

};

Modals.propTypes = {
    detail: PropTypes.string,
};

export default Modals;