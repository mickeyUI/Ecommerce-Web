from fastapi import FastAPI, Depends
from DB import get_db
from Schemas import addingProduct, ListOfProducts
from Models import Products
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI() 

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/getProducts") 
def getProducts(db= Depends(get_db)):
    allProducts = db.query(Products).all()
    return allProducts
    

@app.post("/addProduct")
def addProduct(productList:ListOfProducts ,db= Depends(get_db)):
    products= productList.productLst
    for product in products:
        newProduct = Products(name = product.name, description= product.description, category= product.category, brand= product.brand, image= product.image, price= product.price, rating= product.rating)
        db.add(newProduct)
    db.commit()
    return {"upload": "sucessful"}

