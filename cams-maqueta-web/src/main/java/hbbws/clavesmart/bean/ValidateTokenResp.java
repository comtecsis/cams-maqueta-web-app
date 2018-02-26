
package hbbws.clavesmart.bean;

public class ValidateTokenResp
{
    // Status validacion de token
    public static final String STATUS_OK = "OK";
    public static final String STATUS_FAIL = "FAIL";
    
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
