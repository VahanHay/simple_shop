import { OrderService} from './order-service.js'

class OrderController{
    constructor() {
        this.orderService = new OrderService()
    }
    async create(req ,res){
        try{
           // const data = req.body;
           // const order = await this.orderService.create(data);
            const order = "hello"
            res.status(200).json(order)
        }catch (error){
            console.error(error);
            res.status(400).json({message:"Can not make order"})
        }
    }
}

export {OrderController}