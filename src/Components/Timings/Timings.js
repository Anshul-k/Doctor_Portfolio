import React, { useEffect } from 'react'
import { Table, TableContainer, TableHeading, TableRow, TableData, SquarePrimaryImage } from './TimingsElements'
import SquarePrimary from '../../Images/Assets/SquarePrimary.png'
import Aos from "aos";

export default function Timings() {

    // For Animations
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <TableContainer
            data-aos="fade-up"
            id='timings'
        >
            <div
                style={{ position: 'absolute', width: '100%', height: '100%' }}
            >
                <SquarePrimaryImage
                    style={{ zIndex: 2 }}
                    src={SquarePrimary}
                    alt='Square'
                />
            </div>
            <TableHeading>Timings</TableHeading>
            <Table style={{ zIndex: 1 }}>
                <thead></thead>
                <tbody>
                    <TableRow>
                        <TableData width='40%'>Monday</TableData>
                        <TableData width='60%'>
                            10AM to 1PM
                            <br />
                            and
                            <br />
                            6PM to 9PM
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData width='40%'>Tuesday</TableData>
                        <TableData width='60%'>
                            10AM to 1PM
                            <br />
                            and
                            <br />
                            6PM to 9PM
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData width='40%'>Wednesday</TableData>
                        <TableData width='60%'>
                            10AM to 1PM
                            <br />
                            and
                            <br />
                            6PM to 9PM
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData width='40%'>Thursday</TableData>
                        <TableData width='60%'>
                            10AM to 1PM
                            <br />
                            and
                            <br />
                            6PM to 9PM
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData width='40%'>Friday</TableData>
                        <TableData width='60%'>
                            10AM to 1PM
                            <br />
                            and
                            <br />
                            6PM to 9PM
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData width='40%'>Saturday</TableData>
                        <TableData width='60%'>
                            10AM to 1PM
                            <br />
                            and
                            <br />
                            6PM to 9PM
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData width='40%'>Sunday</TableData>
                        <TableData width='60%' style={{ color: 'red' }}>
                            Closed
                        </TableData>
                    </TableRow>
                </tbody>
                <tfoot></tfoot>
            </Table>
        </TableContainer>
    )
}
