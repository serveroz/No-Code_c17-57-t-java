import { useDispatch, useSelector } from "react-redux"
import { onCloseDateModal, onOpenDateModal } from "../store/ui/uiSlice"


export const useUiStore = () => {
    const dispatch = useDispatch()
    const { isDateModalOpen, servicio, professional} = useSelector(state => state.ui)

    const abrirModal = (servicioData) => {
        dispatch(onOpenDateModal(servicioData))
    }
    const onModal = (profesionalData) => {
        dispatch(onOpenDateModal(profesionalData))
    }

    const cerrarModal = () => {
        dispatch(onCloseDateModal())
    }


    return {
        //Properties
        isDateModalOpen,
        servicio,
        professional,
        //Methods
        abrirModal,
        onModal,
        cerrarModal,

    }
}
