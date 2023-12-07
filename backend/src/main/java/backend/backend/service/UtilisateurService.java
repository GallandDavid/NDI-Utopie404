package backend.backend.service;

import backend.backend.modele.Utilisateur;
import backend.backend.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

@Service
public class UtilisateurService {

    private final UtilisateurRepository utilisateurRepository;
    private final ApplicationContext context;

    @Autowired
    public UtilisateurService(UtilisateurRepository utilisateurRepository,ApplicationContext context) {
        this.utilisateurRepository = utilisateurRepository;
        this.context = context;
    }

    public void createUtilisateur(
        String nom,
        String prenom,
        String username,
        String email,
        String password
        
    ) {
        Utilisateur utilisateur = new Utilisateur();
        utilisateur.setNom(nom);
        utilisateur.setPrenom(prenom);
        utilisateur.setUserName(username);
        utilisateur.setPassword(password);
        utilisateur.setEmail(email);
        utilisateur.setBio("");
        try {
            byte[] imageBytes = Files.readAllBytes(Paths.get("./src/assets/default-profile-picture-avatar-png-green.png"));
            utilisateur.setLogo_utilisateur(imageBytes);
        } catch (IOException e) {
            e.printStackTrace();
        }

        utilisateurRepository.save(utilisateur);
    }

    public void setLogo(String id, byte[] logo) {
        Utilisateur user = this.getUtilisateur(id);
        user.setLogo_utilisateur(logo);
        saveUtilisateur(user);
    }

    public List<Utilisateur> getAllUtilisateurs() {
        return utilisateurRepository.findAll();
    }

    public Utilisateur getUtilisateur(String ID){
        return utilisateurRepository.findByid(ID);
    }

    public boolean existUser(String email){
        Utilisateur user = utilisateurRepository.findByEmail(email);
        return user != null;
    }

    public boolean existUserName(String userName){
        Utilisateur user = utilisateurRepository.findByUserName(userName);
        return user != null;
    }

    public String connectMail(String email, String password){
        Utilisateur user = utilisateurRepository.findByEmail(email);
        if(user.getEmail().equals(email) && user.getPassword().equals(password)){
            return user.getId();
        }
        return "-1";
    }

    public String connectName(String username, String password){
        Utilisateur user = utilisateurRepository.findByUserName(username);
        if(user.getUserName().equals(username) && user.getPassword().equals(password)){
            return user.getId();
        }
        return "-1";
    }

    public void saveUtilisateur(Utilisateur utilisateur) {
        utilisateurRepository.save(utilisateur);
    }

    public void setUserName(String id, String param) {
        Utilisateur user = this.getUtilisateur(id);
        user.setUserName(param);
        saveUtilisateur(user);
    }

    public void setNom(String id, String param) {
        Utilisateur user = this.getUtilisateur(id);
        user.setNom(param);
        saveUtilisateur(user);
    }

    public void setPrenom(String id, String param) {
        Utilisateur user = this.getUtilisateur(id);
        user.setPrenom(param);
        saveUtilisateur(user);
    }

    public void setEmail(String id, String param) {
        Utilisateur user = this.getUtilisateur(id);
        user.setEmail(param);
        saveUtilisateur(user);
    }

    public void setPassword(String id, String param) {
        Utilisateur user = this.getUtilisateur(id);
        user.setPassword(param);
        saveUtilisateur(user);
    }

    public void setBio(String id, String param) {
        Utilisateur user = this.getUtilisateur(id);
        user.setBio(param);
        saveUtilisateur(user);
    }

    public void removeProject(String user_id, String id) {
        Utilisateur user = this.getUtilisateur(user_id);
        user.removeProject(id);
        saveUtilisateur(user);
    }

    public Utilisateur getUtilisateurByName(String nom) {
        for (Utilisateur user : getAllUtilisateurs()) {
            if(user.getEmail().equals(nom) || user.getUserName().equals(nom)){
                return user;
            }
        }
        return null;
    }

    public void addProjet(String userId, String id) {
        Utilisateur user = this.getUtilisateur(userId);
        user.addProjet(id);
        this.utilisateurRepository.save(user);
    }

    public Utilisateur getUtilisateurByEmail(String email) {
        return utilisateurRepository.findByEmail(email);
    }

    public void addAmi(String id, String idAmi) {
        Utilisateur user = this.getUtilisateur(id);
        user.addAmi(idAmi);
        this.utilisateurRepository.save(user);
    }

    public boolean existId(String id) {
        Utilisateur user = utilisateurRepository.findByid(id);
        return user != null;
    }

    public void supprAmi(String id, String idAmi) {
        Utilisateur user = this.getUtilisateur(id);
        if(user.getListAmis().contains(idAmi)){
            user.getListAmis().remove(idAmi);
            this.utilisateurRepository.save(user);
        }
    }

    public void addNotification(String id, String notificationId) {
        Utilisateur user = this.getUtilisateur(id);
        user.addNotification(notificationId);
        this.utilisateurRepository.save(user);
    }



}
 