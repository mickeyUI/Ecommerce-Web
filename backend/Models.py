from DB import Base
from sqlalchemy import Column, Integer, String, Float, Text, ForeignKey



class Products(Base):
    __tablename__ = "Products"
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable= False)
    description = Column(Text, nullable= True)
    category = Column(String, nullable= False)
    brand = Column(String, nullable= False)
    image = Column(String, nullable= False)
    price = Column(Float, nullable= False)
    rating = Column(Float, nullable=True)

class Inventory(Base):
    __tablename__ = "Inventory"
    id = Column(Integer, primary_key=True)
    product_id = Column(Integer, ForeignKey("Products.id"), nullable= False)
    stock = Column(Integer, nullable= False)

class BannerItems(Base):
    __tablename__ = "BannerItems"
    id = Column(Integer, primary_key=True)
    product_id = Column(Integer, ForeignKey("Products.id"), nullable= False)