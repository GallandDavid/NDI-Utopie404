package backend.backend.modele;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.index.Indexed;

import lombok.Data;

import java.util.ArrayList;
import java.util.UUID;

@Data
@Document(collection = "utilisateur")
public class Utilisateur {
    @Id
    private String id = UUID.randomUUID().toString();
    private String password;
    
    @Indexed(unique = true)
    private String email;
    private String nom;
    private String prenom;
    private String userName;
    private ArrayList<String> listProjet = new ArrayList<>();
    private ArrayList<String> listAmis = new ArrayList<>();
    private ArrayList<String> notifications = new ArrayList<>();
    private String bio;
    private byte[] logo_utilisateur;

    public void addProjet(String id){
        listProjet.add(id);
    }

    public void removeProject(String id2) {
        listProjet.remove(id2);
    }

    public void addAmi(String idAmi) {
        listAmis.add(idAmi);
    }

    public void addNotification(String notificationEnfantId) {
        this.notifications.add(notificationEnfantId);
    }

    public void removeNotification(String notificationId) {
        int index = -1;
        for (int i = 0; i < notifications.size(); i++) {
            if(notifications.get(i) == notificationId) index = i;
        }
        if(index != -1) notifications.remove(index);
    }

}
