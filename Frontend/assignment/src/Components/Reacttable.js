import React , { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { favouriteProduct, deleteProduct ,getProducts} from '../redux/actions/ProductActions';

export default function Reacttable() {
    const dispatch = useDispatch();
    
    const navigate = useNavigate();
    
    const products = useSelector((state) => state.products);
        console.log(products);

    return (
        <div className="Container">
            <Table style={{ width: '100%' }}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">SKU</TableCell>
                        <TableCell align="center">IMAGE</TableCell>
                        <TableCell align="center">PRODUCT NAME</TableCell>
                        <TableCell align="center">PRICE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {products?.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell>{item.sku}</TableCell>
                        <TableCell>
                            {/* <CardMedia
                                
                            /> */}
                        </TableCell>
                        <TableCell>{item.pname}</TableCell>
                        <TableCell>{item.qty}</TableCell>
                        <TableCell>
                            <Stack direction="row" spacing={1}>
                                <IconButton style={{color:"#001EB9"}}
                                onClick={() => dispatch(deleteProduct(item._id))}
                                >
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton  style={{color:"#001EB9"}}
                                 onClick={() => {
                                    navigate("/newproduct");
                                  }}
                                >
                                    <EditIcon />
                                </IconButton>
                                <IconButton style={{color:"#001EB9"}}
                                onClick={() => dispatch(favouriteProduct(item._id))}
                                >
                                    <StarOutlineIcon />
                                </IconButton>
                            </Stack>
                        </TableCell>
                    </TableRow>
                     ))}
                </TableBody>
            </Table>
        </div>

    )
}
