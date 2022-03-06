import React from 'react';
import { useNavigate } from "react-router-dom";
// import Input from '@mui/material/Input';
import { Input, SearchButton, Wrapper } from './introstyles.js';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack';


export default function () {
    const navigate = useNavigate();
    return (
        <div className="Container">
            <div className="SectionTitle">PRODUCTS</div>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Wrapper >
                        <Input placeholder="search for products" />
                        <SearchButton>Search</SearchButton>
                    </Wrapper>
                </Grid>
                <Grid item xs={4}>
                    <Stack direction="row" spacing={2}>
                        <Button style={{ background: '#001EB9', color: "#FFFFFF", borderRadius: '10px' }}
                        onClick={() => {
                            navigate("/newproduct");
                          }}
                        >New Product</Button>
                        <Button variant="outlined" style={{ color: '#001EB9' }}>
                            <StarIcon />
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}
