from pydantic import BaseModel
from typing import List

class addingProduct(BaseModel):
    name: str
    price: float
    category: str
    brand: str
    rating: float
    image: str
    description: str
class ListOfProducts(BaseModel):
    productLst: List[addingProduct]