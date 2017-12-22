# Build stage
FROM microsoft/aspnetcore-build:2 AS build-env

WORKDIR /noswivalapp

# restore
COPY noswival.sln .
RUN dotnet restore

# copy app
COPY . .

# test
RUN dotnet test noswivaltests/noswivaltests.csproj

# publish
 RUN dotnet publish noswival/noswival.csproj -o /publish

# Runtime 
FROM microsoft/aspnetcore:2
COPY --from=build-env /publish /publish
WORKDIR /publish
ENTRYPOINT ["dotnet", "noswival.dll"]