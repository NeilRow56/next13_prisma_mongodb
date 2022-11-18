import { createProduct, getProducts, deleteProduct, updateProduct} from '../../../lib/prisma/products'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { products, error } = await getProducts()
      if (error) throw new Error(error)
      return res.status(200).json({ products })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

 
  // Run if the request was a post request
  if (req.method == "POST") {
    try {
    // Get product productName, description, image & price from the request body
    const { productName, description, image, price } = req.body;

    // Create a new product
    
    const product = await createProduct(productName, description, image, price );
    // return created product
    return res.status(200).json({ success: true, product});
    }  catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

    
 

  res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE',  ])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler