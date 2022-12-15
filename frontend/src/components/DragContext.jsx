import React from "react";
import EmployeItem from "./EmployeItem";
import {
    GridContextProvider,
    GridDropZone,
    GridItem,
    swap,
    swapDept,
    move
} from "react-grid-drag";

import { updateEmploye, updateAllEmployes } from '../features/employes/employeSlice'
import { useDispatch } from 'react-redux'



function DragContext({ employes }) {
    const dispatch = useDispatch()
    const IT = employes.filter(employe => employe.departement === 'IT Department')
    const RH = employes.filter(employe => employe.departement === 'RH Department')
    const [items, setItems] = React.useState({
        boxesPerRow: 2,
        rowHeight: 120,
        left: IT,
        right: RH
    });

    function onChange(sourceId, sourceIndex, targetIndex, targetId) {

        if (targetId) {

            const result = move(
                items[sourceId],
                items[targetId],
                sourceIndex,
                targetIndex
            );

            dispatch(updateEmploye({ id: items[sourceId][sourceIndex]._id }))
            return setItems({
                ...items,
                [sourceId]: result[0],
                [targetId]: result[1]
            });

        }

        const result = swap(items[sourceId], sourceIndex, targetIndex);
        let newobj = {
            ...items,
            [sourceId]: result
        }
        let datatosend = [...newobj.left, ...newobj.right]

        dispatch(updateAllEmployes(datatosend))
        return setItems({
            ...items,
            [sourceId]: result
        });
    }


    const ZoneContent = (p) => {
        const { type = "IT", items } = p;
        const { boxesPerRow, rowHeight } = items;
        return (
            <GridDropZone
                className={`dropzone ${type}`}
                id={type}
                boxesPerRow={boxesPerRow}
                rowHeight={rowHeight}
            >
                {items[type].map((item) => (
                    <GridItem key={item._id}>
                        <EmployeItem employe={item} />
                    </GridItem>
                ))}
            </GridDropZone>
        );
    };

    return (
        <GridContextProvider onChange={onChange}>
            <div className="container drop-context">
                <div>
                    <h5 className="department"> IT Department</h5>
                    <ZoneContent {...{ type: "left", items }} />
                </div>
                <div>
                    <h5 className="department"> RH Department</h5>
                    <ZoneContent {...{ type: "right", items }} />
                </div>

            </div>
        </GridContextProvider>
    );
}

export default DragContext
