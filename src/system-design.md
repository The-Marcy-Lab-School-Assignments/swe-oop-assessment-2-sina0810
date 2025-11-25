# Section 3 — System Design

Loom Link: 
Part one: 
https://www.loom.com/share/eef4360329a04d6b87518f6f97621dcd

Part two. Sorry I forgot this part in the first part of the video. 
https://www.loom.com/share/b1bf12f3093643d9a3b0801d9c48172a

UML Diagram:
https://lucid.app/lucidchart/f5751055-22d2-4a68-ac67-20e32a02c63e/edit?viewport_loc=-1536%2C-1357%2C2384%2C1011%2C0_0&invitationId=inv_6276d31f-51e5-4153-8754-5239e218ce6d


## Notes:

Feel free to add any notes or planning here.

class Restaurant 
- name : name 
- menuItems: string
- location: string
- order: order []

+ pickUp():
+ delivery(): 



calss Customer 
- name : name
- address: string
- phoneNumber: number

+ placeOrder(): Order
+ pay(): Restaurant




class Order
- orderId: string
- total: number
- status: string
- restaurant : Restaurant 
- customer: Customer 

+ pending(): null
+ progress () : null
+ pickedUp (): null
+ delivered() : null
+ updateStatus(): Order