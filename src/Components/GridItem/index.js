import React from 'react';
import * as C from './styles';
import {
    FaRefArrowAltCircleUp,
    FaRefArrowAltCircleDown,
    FaTrash,
} from "react-icons/fa";



const GridItem = ({ item, onDelete}) => {
    return (
        <C.Tr>
            <C.Td>{item.desc}</C.Td>
            <C.Td>{item.amount}</C.Td>
            <C.Td alignCenter>
                {item.expense ? (
                    <FaRefArrowAltCircleDown color="red" />
                ) : (
                    <FaRefArrowAltCircleUp color="green" />
                )}
            </C.Td>
            <C.Td alignCenter>
                <FaTrash onClick={() => onDelete(item.id)} />
            </C.Td>
        </C.Tr>
    )
}

export default GridItem;