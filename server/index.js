import '../config';
import Application from './src/App';

class Server extends Application {
  constructor() {
    super();

    this.createServer();
    this.useHttpLogger();
    this.useBodyParser();
    this.useSession();
    this.useStaticResource();
    this.useViewEngine();
    this.initRouter();
    this.useWebSocketServer();
    this.useErrorHandler();
    this.run();
    this.connectDB().catch((e) => {
      console.log(e)
    });
    this.initAdmin();
  }
}

export default new Server();