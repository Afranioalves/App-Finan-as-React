import React from 'react';
import GridItem from '../GridItem';
import * as C from './styles';

const Grid = ({ itens, setItens}) => {
    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transaction", JSON.stringify(newArray));
    };

    return (
    <C.Table>
        <C.Thead>
            <C.Tr>
                <C.Th width={40}>Description</C.Th>
                <C.Th width={40}>Value</C.Th>
                <C.Th width={10} alignCenter>
                    Type
                    </C.Th>
                <C.Th width={10}></C.Th>
            </C.Tr>
        </C.Thead>
        <C.TBody>
            {itens?.map((item, index) => (
                <GridItem key={index} item={item} onDelete={onDelete} />
            ))}

        </C.TBody>
    </C.Table>
    )
}

export default Grid;