
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import java.io.IOException;
import java.io.OutputStream;

public class JoinHandler implements HttpHandler {
    @Override
    public void handle(HttpExchange exchange) throws IOException {
        String htmlResponse = "<h2>Join Page Active ✅</h2>" +
                "<p>Server is running properly.</p>" +
                "<form method='post'>" +
                "Name: <input name='name'><br>" +
                "Email: <input name='email'><br>" +
                "<input type='submit' value='Join'>" +
                "</form>";
        exchange.sendResponseHeaders(200, htmlResponse.getBytes().length);
        OutputStream os = exchange.getResponseBody();
        os.write(htmlResponse.getBytes());
        os.close();
    }
}