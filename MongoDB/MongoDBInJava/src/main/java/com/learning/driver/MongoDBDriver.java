package com.learning.driver;

import com.mongodb.MongoClient;
import com.mongodb.MongoException;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Updates;
import com.mongodb.client.result.UpdateResult;
import org.bson.Document;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MongoDBDriver {

    private static MongoClient mongoClient;

    static {
        mongoClient = new MongoClient("localhost", 27017);
    }

    public static void closeMongoClient() {
        try {
            if (mongoClient != null) {
                mongoClient.close();
            }
        } catch (MongoException e) {
            System.out.println("Exception occurred while close MongoClient : " + e);
        }
    }

    public static void main(String[] args) {
        MongoDBDriver mongoDBDriver = new MongoDBDriver();
        //mongoDBDriver.getDocuments("cisco", "orders");

        String databaseName = "cisco";
        String collectionName = "customer";
        MongoCollection<Document> mongoCollection = mongoDBDriver.getCollection(databaseName, collectionName);


//        //Step 1:- Create a collection
//        mongoDBDriver.createCollection(databaseName, collectionName);
//
//        //Step 2:- Insert a one document to collection
//        mongoDBDriver.insertDocument(databaseName, collectionName);
//
//        //Step 3:- Insert a many documents to collection
//
//        mongoDBDriver.insertManyDocuments(mongoCollection);

        mongoDBDriver.updateDocument(mongoCollection);

        //Step 4:- Retrieve the document from collection
        mongoDBDriver.getDocuments(databaseName, collectionName);

        mongoDBDriver.deleteDocumet(mongoCollection);

        mongoDBDriver.getDocuments(databaseName, collectionName);

        closeMongoClient();
    }

    public MongoCollection<Document> getCollection(String database, String collectionName) {

        // Creating Credentials
        //MongoCredential credential = MongoCredential.createCredential("username", "database", "password".toCharArray());
        //System.out.println("Connected to the database successfully");

        MongoDatabase mongoClientDatabase = mongoClient.getDatabase(database);
        return mongoClientDatabase.getCollection(collectionName);
    }

    //READ ALL
    public List<Document> getDocuments(String database, String collectionName) {
        MongoCollection<Document> employeesCollection = getCollection(database, collectionName);
        List<Document> documentList = new ArrayList<Document>();
        for (Document document : employeesCollection.find()) {
            documentList.add(document);
            System.out.println(document.entrySet());
        }
        return documentList;
    }

    public void createCollection(String database, String collectionName) {
        MongoDatabase clientDatabase = mongoClient.getDatabase(database);
        clientDatabase.createCollection(collectionName);
        System.out.println("Customer collection " + collectionName + " created successfully!");
    }

    //CREATE - ONE
    public void insertDocument(String database, String collectionName) {
        MongoCollection<Document> mongoCollection = getCollection(database, collectionName);

        Document customerDocument = new Document("name", "Virat");
        customerDocument.put("city", "Delhi");
        customerDocument.put("profession", "cricket");
        customerDocument.put("age", "33");
        mongoCollection.insertOne(customerDocument);
    }

    //CREATE - MANY
    public void insertManyDocuments(MongoCollection<Document> mongoCollection) {
        Document document1 = new Document("name", "Rafel Nadal").append("city", "Spain")
                .append("profession", "tennis  ").append("age", "35");
        Document document2 = new Document("name", "Michael Jordan").append("city", "American")
                .append("profession", "basketball").append("age", "58");

        List<Document> documentList = Arrays.asList(document1, document2);
        mongoCollection.insertMany(documentList);
    }

    //UPDATE - ONE
    public void updateDocument(MongoCollection<Document> mongoCollection) {
        UpdateResult updateResult = mongoCollection.updateOne(Filters.eq("name", "Virat"), Updates.set("name", "Virat Kohli"));
        System.out.println("************ Document updated successfully ************* " + updateResult.getMatchedCount());
    }

    //DELETE - ONE
    public void deleteDocumet(MongoCollection<Document> mongoCollection) {
        mongoCollection.deleteOne(Filters.eq("name", "Virat Kohli"));
        System.out.println("************ Document deleted successfully ************* ");
    }

}
