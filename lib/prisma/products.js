import prisma from '.'

// GET all products

export async function getProducts() {
  try {
    const products = await prisma.product.findMany()
    return { products }
  } catch (error) {
    return { error }
  }
}


// CREATE
export const createProduct = async (productName, description, image, price) => {
  const product = await prisma.product.create({
    data: {
      productName,
      description,
      image,
      price
    //   user: { connect: { email: session?.user?.email } },
    
    },
  });
  

  return product;
}

export async function getProductById(id) {
  try {
    const product = await prisma.product.findUnique({ where: { id } })
    return { product }
  } catch (error) {
    return { error }
  }
}


