import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createProduct, updateProduct } from '../redux/actions/ProductActions';
import FileBase from 'react-file-base64';


export default function Newproduct() {
  const [productData, setProductData] = useState({ sku: '', pname: '', qty: '', discription: '', selectedFile: '' });
  const [currentId, setCurrentId] = useState(0);

  const dispatch = useDispatch();
  const product = useSelector((state) => (currentId ? state.products.find((product) => product._id === currentId) : null));

  useEffect(() => {
    if (product) setProductData(product);
  }, [product]);

  const clear = () => {
    setCurrentId(0);
    setProductData({ sku: '', pname: '', qty: '', discription: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      console.log(productData);
      dispatch(createProduct(productData));
      clear();
    } else {
      dispatch(updateProduct(currentId, productData));
      clear();
    }

  };
  return (
    <div className="Container">
      <div className="SectionTitle" style={{ marginTop: "50px" }}>PRODUCTS
        <span style={{ color: "#001EB9", letterSpacing: "0" }}> {'>'}  Add new product</span>
      </div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid xs={12}>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <span >SKU</span>
              <TextField
                id="filled-size-small"
                variant="filled"
                size="small"
                name="sku"
                value={productData.sku}
                onChange={(e) => setProductData({ ...productData, sku: e.target.value })}
              />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <span >Name</span>
              <TextField
                id="filled-size-small"
                variant="filled"
                size="small"
                name="pname"
                value={productData.pname}
                onChange={(e) => setProductData({ ...productData, pname: e.target.value })}
              />
            </Stack>
          </Grid>
          <Grid item xs={8}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <span >QTY</span>
              <TextField id="filled-size-small"
                variant="filled"
                size="small"
                name="qty"
                value={productData.qty}
                onChange={(e) => setProductData({ ...productData, qty: e.target.value })} />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <span >Product Description</span>
          </Grid>
          <Grid item xs={12}>
            <p style={{fontWeight:"500",fontSize: "14px",lineHeight: "18.9px", color: "#969191"}}>A small description about the product</p>
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Empty"
              style={{ width: 500, height: 200 }}
              name="discription"
              value={productData.discription}
              onChange={(e) => setProductData({ ...productData, discription: e.target.value })}
            />
          </Grid>
          <Grid item xs={4}>
            <p>Product images</p>
          </Grid>
          <Grid item xs={4}>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setProductData({ ...productData, selectedFile: base64 })}/>  
          </Grid>
          <Grid item xs={12}>
            <p>JPEG, PNG, SVG or GIF</p>
            <p style={{fontWeight:"500",fontSize: "14px",lineHeight: "18.9px", color: "#969191"}}> (Maximum file size 50MB)</p>
          </Grid>
          <Grid item xs={12}>
          <Button type="submit"  style={{ background: '#001EB9', color: "#FFFFFF", borderRadius: '10px'}}>Add Product</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}
