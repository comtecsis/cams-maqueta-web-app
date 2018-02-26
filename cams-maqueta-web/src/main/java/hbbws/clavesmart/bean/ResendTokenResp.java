
package hbbws.clavesmart.bean;

public class ResendTokenResp
{
    // Status validacion de token
    public static final String RESPONSE_OK = "OK";
    public static final String RESPONSE_FAIL = "FAIL";
    
    private String status;

    public String getStatus()
    {
        return status;
    }

    public void setStatus(String status)
    {
        this.status = status;
    }

}
