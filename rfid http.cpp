#include <WiFiNINA.h>



char ssid[] = "Zaytech_5G";
char pass[] = "Zay007@RpfmExGE";

int status = WL_IDLE_STATUS;

char server[] = "http://127.0.0.1";

String postData;
String postVariable = "UID=";

WiFiClient client;

void setup() {

  Serial.begin(9600);

  while (status != WL_CONNECTED) {
    Serial.print("Attempting to connect to Network named: ");
    Serial.println(ssid);
    status = WiFi.begin(ssid, pass);
    delay(10000);
  }

  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());
  IPAddress ip = WiFi.localIP();
  IPAddress gateway = WiFi.gatewayIP();
  Serial.print("IP Address: ");
  Serial.println(ip);
}

void loop() {
  String scannedUID;

  postData = postVariable + scannedUID;

  if (client.connect(server, 80)) {
    client.println("POST /test/post.php HTTP/1.1");
    client.println("Host: www.elithecomputerguy.com");
    client.println("Content-Type: application/x-www-form-urlencoded");
    client.print("Content-Length: ");
    client.println(postData.length());
    client.println();
    client.print(postData);
  }

  if (client.connected()) {
    client.stop();
  }
  Serial.println(postData);

  delay(3000);
}