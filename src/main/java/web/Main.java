package web;

import io.javalin.Javalin;
import io.javalin.staticfiles.Location;

public class Main {
    public static void main(String[] args) {
        Javalin app = Javalin.create();
        app.get("/", ctx -> ctx.result("Hello World"));
        app.enableStaticFiles("./wwwroot", Location.EXTERNAL);
        app.start(7000);
    }
}