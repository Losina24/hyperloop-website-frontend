import { Router, Request, Response } from 'express';
import usersController from '../controllers/usersController';

class UsersRouter {

    public router: Router = Router();

    constructor() {
        this.login();
        this.register();
    }

    public login = () => this.router.post('/login', (req: Request, res: Response) => {
        const email: string = req.body.email;
        const pass: string = req.body.password;

        usersController.login(email, pass)
            .then( response => {
                res.send(response)
            })
            .catch( err => {
                res.send(err)
            })
    })

    public register = () => this.router.post('/register', (req: Request, res: Response) => {
        const email: string = req.body.email;
        const pass: string = req.body.password;
        const name: string = req.body.name;

        usersController.register(email, pass, name)
            .then( response => {
                res.send(response)
            })
            .catch( err => {
                res.send(err)
            })
    })
}

const userRouter = new UsersRouter();
export default userRouter.router;