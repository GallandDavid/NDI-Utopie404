package backend.backend.repository;

import backend.backend.modele.Utilisateur;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UtilisateurRepository extends MongoRepository<Utilisateur, String> {
    Utilisateur findByEmail(String email);
    Utilisateur findByUserName(String userName);
    Utilisateur findByid(String id);
}
