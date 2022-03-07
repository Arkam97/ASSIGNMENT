import axios from 'axios';

const url = 'http://localhost:5000/product/';

// export const fetchProducts = () => axios.get(url);
export async function fetchProducts() {
  try {
    const response = await axios.get('http://localhost:5000/product/getproducts', {
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log(response.data[0]);

    if (response != null) {
      switch (response.status) {
        case 200:
          return response.data[0];
        case 201:
          return null;
      }
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
}
// export const createProduct = (newProduct) => axios.post(`${url}/createproduct`, newProduct);
// export const createProduct = async(newProduct) => {
    // const formData = new FormData();
    
    // for (const key of Object.keys(newProduct.selectedFiles)) {
    //     formData.append('multipleImages', newProduct.selectedFiles[key])     
    // }
//     console.log(newProduct.sku);

//     formData.append("sku",newProduct.sku); 
//     formData.append("pname",newProduct.pname); 
//     formData.append("qty",newProduct.qty); 
//     formData.append("description",newProduct.description);
//     formData.append("selectedFile",newProduct.selectedFile);


//     console.log(formData);

//     await axios.post( 'http://localhost:5000/product/createproduct',formData,
//     {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       }
//     }).then((result) => {
//         console.log(result)
//         return result
//     }).catch((err) => {
//         return err
//     });
// }

export const createProduct = async(newProduct) => {
 
    let productBody = {
      sku:newProduct.sku,
      pname:newProduct.pname,
      qty:newProduct.qty,
      discription:newProduct.discription,
      selectedFile:newProduct.selectedFile,
    };  


    await axios.post( 'http://localhost:5000/product/createproduct',productBody,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }).then((result) => {
        console.log(result)
        return result
    }).catch((err) => {
        return err
    });
}

export const favouriteProduct = (id) => axios.patch(`${url}/${id}/favoriteproduct`);
export const updateProduct = (id, updateProduct) => axios.patch(`${url}/${id}`, updateProduct);
export const deleteProduct = (id) => axios.delete(`${url}/${id}`);