import React from 'react'
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Button from '@mui/material/Button';


export default function Reacttable() {
  return (
      <div className="Container">
            <Table style={{width: '100%'}}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">SKU</TableCell>
                        <TableCell align="center">IMAGE</TableCell>
                        <TableCell align="center">PRODUCT NAME</TableCell>
                        <TableCell align="center">PRICE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>
                            {/* <CardMedia
                                
                            /> */}
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell><Button color="primary"  >Approve
                        </Button>&nbsp;<Button color="primary" round  >reject</Button></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
      </div>
  
  )
}
